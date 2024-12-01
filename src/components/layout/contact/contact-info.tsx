import React from 'react';
import ContactService from './contact-service';
import ContactMe from './contact-me';
import ConatctSocial from './contact-social';
import { contactInfo } from '@/data';
import { Text } from '@/components/global';

const ContactInfo: React.FC = () => (
    <div className='contact-info flex flex-col sm:flex-row gap-1'>
        <div className='ci-wrapper left'>
            <div className='flex flex-col gap-4'>
                <ContactService items={contactInfo.services} />
                <ConatctSocial />
                <div>
                    <h3 className='font-semibold text-gray-300 mb-1'>Start a project</h3>
                    <Text>{contactInfo.freelanceAvailability}</Text>
                </div>
            </div>
        </div>
        <div className='ci-wrapper right'>
            <ContactMe me={contactInfo.contactMe} />
        </div>
    </div>
);

export default ContactInfo;
