import { TypeAnimation } from 'react-type-animation';

function AboutContent({ content, subtitle }: { content: string[]; subtitle: string }) {
    return (
        <div className='flex flex-col gap-y-2'>
            <h3 className='text-2xl font-semibold text-gray-300 pt-2'>{subtitle}</h3>
            <TypeAnimation
                sequence={[content[0] + '\n' + content[1], 1000]}
                wrapper='span'
                cursor={true}
                speed={50}
                className='text-lg text-gray-500'
            />
        </div>
    );
}

export default AboutContent;
