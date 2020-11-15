import React from 'react';

import {
    ContactUsContainer,
    SectionsContainer,
    SectionContainer,
    AddressIcon,
    PhoneIcon,
    EmailIcon,
    ItemTitle,
    ItemContact

} from './contact-us.styles';

const ContactUsPage = () => (
    <ContactUsContainer>
        <h1>Contact Us</h1>
        <SectionsContainer>
            <SectionContainer>
                <AddressIcon />
                <ItemTitle>ADDRESS</ItemTitle>
                <ItemContact>27 13 Lowe Haven</ItemContact>
            </SectionContainer>

            <SectionContainer>
                <PhoneIcon />
                <ItemTitle>PHONE</ItemTitle>
                <ItemContact>111 343 43 43</ItemContact>
            </SectionContainer>

            <SectionContainer>
                <EmailIcon />
                <ItemTitle>EMAIL</ItemTitle>
                <ItemContact>crwn@info.com</ItemContact>
            </SectionContainer>
        </SectionsContainer>
    </ContactUsContainer>
)

export default ContactUsPage;