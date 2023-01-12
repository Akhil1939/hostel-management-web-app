import React from 'react';
import ApplicationForm from './ApplicationForm';
import StudentNav from './StudentNav';
import StudentPast from './StudentPast';
import StudentPending from './StudentPending';

export default function Student() {
  return (
    <>
    <StudentNav/>
    <ApplicationForm/>
    </>
  );
}
