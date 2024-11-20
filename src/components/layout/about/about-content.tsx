import { Text } from '@/components/global';

function AboutContent({ content, subtitle }: { content: string[]; subtitle: string }) {
    return (
        <div className='flex flex-col gap-y-2'>
            <h3 className='text-2xl font-semibold text-gray-300 pt-2'>{subtitle}</h3>
            <Text>{content[0]}</Text>
            <Text>{content[1]}</Text>
        </div>
    );
}

export default AboutContent;
