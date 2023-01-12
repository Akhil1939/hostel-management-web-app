-- Create a database
CREATE DATABASE gec_leave_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


-- Warden table
CREATE TABLE public.warden
(
    id serial NOT NULL,
    name character varying(100) NOT NULL,
    contact_no character varying(10) NOT NULL,
    mail character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(10) NOT NULL DEFAULT 'warden',
    hostel_type character(1) NOT NULL DEFAULT 'G',
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone,
    PRIMARY KEY (id),
    CONSTRAINT uq_mail UNIQUE (mail)
);

-- Room table
CREATE TABLE public.room
(
    id SERIAL NOT NULL,
    room_number INTEGER,
    warden_id INTEGER,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone,
    PRIMARY KEY (id),
    FOREIGN KEY (warden_id) REFERENCES public.warden(id),
    CONSTRAINT uq_number UNIQUE (room_number)
);

-- Hosteller table
CREATE TABLE public.hosteller
(
    id serial NOT NULL,
    name character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    enrollment_number character varying(20) NOT NULL,
    contact_no character varying(10) NOT NULL,
    mail character varying(100) NOT NULL,
    gender character(1) DEFAULT 'F',
    address character varying(255) NOT NULL,
    role character varying(10) NOT NULL DEFAULT 'hosteller',
    admission_date date NOT NULL,
    expire_date date,
    semester smallint NOT NULL,
    warden_id integer NOT NULL,
    room_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uq_en_no UNIQUE (enrollment_number, contact_no, mail),
    CONSTRAINT fk_room_id FOREIGN KEY (room_id)
        REFERENCES public.room (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT fk_warden_id FOREIGN KEY (warden_id)
        REFERENCES public.warden (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);


-- Guardian table
CREATE TABLE public.guardian
(
    id serial NOT NULL,
    name character varying(100) NOT NULL,
    contact_no character varying(20) NOT NULL,
    mail character varying(100) NOT NULL,
    relation character varying(20) NOT NULL,
    hosteller_id integer NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_DATE,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (id),
    CONSTRAINT fk_hosteller FOREIGN KEY (hosteller_id)
        REFERENCES public.hosteller (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);

-- roommate table
CREATE TABLE public.roommate
(
    id serial NOT NULL,
    room_id integer NOT NULL,
    hosteller_id integer NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_DATE,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_DATE,
    PRIMARY KEY (id, room_id, hosteller_id),
    CONSTRAINT fk_hosteller FOREIGN KEY (hosteller_id)
        REFERENCES public.hosteller (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT fk_room FOREIGN KEY (room_id)
        REFERENCES public.room (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID
);

-- leave table
CREATE TABLE public.leave
(
    id serial,
    subject character varying(100) NOT NULL,
    reason character varying(255),
    vehicle character varying(100),
    from_date timestamp without time zone NOT NULL,
    to_date timestamp without time zone NOT NULL,
    remarks_date timestamp without time zone,
    status character varying(10) NOT NULL DEFAULT 'p',
    remarks character varying(255),
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_DATE,
    updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_DATE,
    hosteller_id integer NOT NULL,
    warden_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_hosteller FOREIGN KEY (hosteller_id)
        REFERENCES public.hosteller (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT fk_warden FOREIGN KEY (warden_id)
        REFERENCES public.warden (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT chk_from_date CHECK (from_date < to_date AND from_date > CURRENT_DATE) NOT VALID
);

-- updation in tables

-- roommate
ALTER TABLE IF EXISTS public.leave
    ADD COLUMN roommate_id integer NOT NULL;

ALTER TABLE IF EXISTS public.leave
    ADD COLUMN roommate_status character varying NOT NULL DEFAULT 'p';

ALTER TABLE IF EXISTS public.leave
    ADD COLUMN place character varying;

ALTER TABLE IF EXISTS public.leave
    ADD CONSTRAINT fk_hosteller_approval FOREIGN KEY (roommate_id)
    REFERENCES public.hosteller (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    NOT VALID;

-- Functions

-- Create Bundle of room (void)
CREATE OR REPLACE FUNCTION fn_create_bundle_rooms(warden_id int, from_number int, to_number int)
RETURNS VOID AS
$body$
DECLARE
    i int DEFAULT from_number;
BEGIN
    LOOP
        INSERT INTO public.room(room_number, warden_id) VALUES(i, warden_id);
        i := i+1;
        EXIT WHEN i > to_number;
    END LOOP;
END
$body$
LANGUAGE plpgsql;


-- Insertions

-- hosteller

-- json data
-- {
--     "name": "Felisha Martijn",
--     "password": "lGpzPr4mD",
--     "enrollment_number": "190210116001",
--     "contact_no": "8621734769",
--     "mail": "fmartijn0@de.vu",
--     "gender": "M",
--     "address": "12641 Graceland Plaza",
--     "role": "hosteller",
--     "admission_date": "2022/10/08",
--     "expire_date": "2023/10/08",
--     "semester": 5,
--     "room_id": 23,
--     "warden_id": 5,
--     "guardian": [
--         {
--             "name": "Cassandre Jozwiak",
--             "contact_no": "8946321903",
--             "mail": "cjozwiak0@elpais.com",
--             "relation": "father"
--         },
--         {
--             "name": "Vinny Keer",
--             "contact_no": "9228816166",
--             "mail": "vkeer1@angelfire.com",
--             "relation": "mother"
--         }
--     ]
-- }