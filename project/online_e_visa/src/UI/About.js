import { Card, Stack, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';

export default function Aboutus() {
  const [showInformation, setShowInformation] = useState(false);
  const [showInfo, setInfo] = useState(false);

  const toggleInformation = () => {
    setShowInformation(!showInformation);
  };

  const setShowInfo = () => {
    setInfo(!showInfo);
  };

  return (
    <div>
      <Navbar />
      <Stack sx={{ marginBottom: 2, alignItems: 'center' }}>
        {showInformation && (
          <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <Card>
              <Typography variant="body1">
                International travelers whose sole objective for visiting India is recreation, sightseeing, casual visit to meet friends and relatives, attending a short-term yoga program, short-term courses on local languages, music, dance, arts & crafts, cooking, medicine, etc. which should not be a formal or structured course/program (courses not exceeding 6 months duration and not issued with a qualifying certificate/diploma etc), voluntary work of short duration (for a maximum period of one month, which does not involve any monetary payment or consideration of any kind in return), medical treatment including treatment under Indian systems of medicine, business purpose, as attendant to e-Medical visa holder, attending a conference/seminar/workshop organized by a Ministry or Department of the Government of India, State Governments or UT Administrations etc. & their subordinate/attached organizations & PSUs and private conferences organized by private persons/companies/organizations. Applicant's passport should have at least six months validity at the time of making an application for the grant of e-Visa. International Travelers should have a return ticket or onward journey ticket, with sufficient money to spend during his/her stay in India. International Travelers having a Pakistani Passport or Pakistani origin may please apply for a regular Visa at the Indian Mission. Not available to Diplomatic/Official Passport Holders or Laissez-passer travel document holders. Not available to individuals endorsed on Parent's/Spouse's Passport, i.e. each individual should have a separate passport. Not available to International Travel Document Holders other than Passport.
              </Typography>
            </Card>
          </div>
        )}

        {showInfo && (
          <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            <Card>
              <Typography variant="body1">
                e-Visa has 5 sub-categories viz. e-Tourist Visa (for 30 days/01 year/ 05 years), e-Business Visa, e-Medical Visa, e-Medical Attendant Visa, and e-Conference Visa. A foreigner (other than those applying for e-Conference Visa) will be allowed to club activities permitted under these categories. Foreigners applying for e-Conference visa will be permitted to club the activities permitted under e-Tourist visa only (validity co-terminus with e-Conference Visa only, i.e. 30 days). Only two e-Medical Attendant Visas will be granted against one e-Medical Visa.
                <br />
                For e-Tourist and e-Business visa, Applicants of the eligible countries/territories may apply online a minimum of 4 days in advance of the date of arrival.
                <br />
                For e-Medical, e-Medical Attendant, and e-Conference visa, Applicants of the eligible countries/territories may apply online a minimum of 4 days in advance of the date of arrival with a window of 120 days. Example: If you are applying on 1st Sept, then the applicant can select the arrival date from 5th Sept to 2nd Jan.
                <br />
                Sample eVisa application form is available on the tab near the bottom of the eVisa main page.
                <br />
                A recent front-facing photograph with a white background and the photo page of Passport containing personal details like name, date of birth, nationality, expiry date, etc. are to be uploaded mandatorily by the applicant. Additionally, one more document depending upon the e-Visa type would also be required to be uploaded. The application is liable to be rejected if the uploaded documents and photograph are not clear/as per specification.
              </Typography>
            </Card>
          </div>
        )}

        <Button
          variant='contained'
          sx={{ backgroundColor: 'orange', color: 'white', marginBottom: 2, width: '400px', fontSize: '1.2rem',m:10 }}
          onClick={toggleInformation}
        >
          Countries/Nationalities who are eligible
        </Button>
        <Button
          variant='contained'
          sx={{ backgroundColor: 'orange', color: 'white', marginBottom: 2, width: '400px', fontSize: '1.2rem' }}
          onClick={setShowInfo}
        >
          Instructions for Applicant
        </Button>
      </Stack>
    </div>
  );
}