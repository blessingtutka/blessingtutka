import React from 'react';
import { Text } from '@/components/global';

interface ContactMeProps {
    me: IContactMe;
}
const ContactMe: React.FC<ContactMeProps> = ({ me }) => (
    <div className='contact-info flex flex-col gap-3'>
        <div>
            <h4 className='font-semibold text-gray-300'>About</h4>
            <Text>{me.about}</Text>
        </div>
        <div>
            <h4 className='font-semibold text-gray-300'>Email</h4>
            <a href={`mailto:${me.email}`} className='wvar font-inter text-gray-500 text-lg hover:text-[#008bff] break-words'>
                {me.email}
            </a>
        </div>
        <div>
            <h4 className='font-semibold text-gray-300'>Call</h4>
            <a href={`tel:${me.phone}`} className='wvar font-inter text-gray-500 text-lg hover:text-[#008bff]'>
                {me.phone}
            </a>
        </div>
    </div>
);

export default ContactMe;
