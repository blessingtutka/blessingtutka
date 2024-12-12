import ContactFormHeader from './contact-form-header';
import ConatactMultiStepForm from './contact-mutli-step-form';

function ContactForm() {
    return (
        <div className='w-full mlg:w-mid'>
            <div className='contact-form'>
                <ContactFormHeader />
                <ConatactMultiStepForm />
            </div>
        </div>
    );
}

export default ContactForm;
