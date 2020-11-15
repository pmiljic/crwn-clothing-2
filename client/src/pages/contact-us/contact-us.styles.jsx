import styled, { css } from 'styled-components';

import { ReactComponent as AddressIconSVG } from '../../assets/location.svg';
import { ReactComponent as PhoneIconSVG } from '../../assets/phone.svg';
import { ReactComponent as EmailIconSvg } from '../../assets/email.svg';

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export const SectionsContainer = styled.div`
 display: flex;
 margin-top: 35px;
 justify-content: space-between;
 width:50%;

 @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
}

@media screen and (max-width: 480px) {
    width: 70%;
    margin-top: 10px;
}
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  
  @media screen and (max-width: 800px) {
    margin: 25px 0;
}
`;

export const iconStyles = css`
  width: 48px;
  height: 48px;
`;

export const AddressIcon = styled(AddressIconSVG)`
  ${iconStyles}
`;

export const PhoneIcon = styled(PhoneIconSVG)`
  ${iconStyles}
`;

export const EmailIcon = styled(EmailIconSvg)`
  ${iconStyles}
`;

export const ItemTitle = styled.span`
 font-weight: bold;
 margin-bottom: 6px;
 font-size: 20px;
 
`;

export const ItemContact = styled.span`
 font-weight: 500;
 font-size: 16px;
 
`;