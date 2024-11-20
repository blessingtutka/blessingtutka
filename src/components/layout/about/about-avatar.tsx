import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function AboutAvatar({ avatar }: { avatar: string }) {
    return (
        <Avatar className='about-avatar w-12 h-12 border border-gray-300 rounded-full'>
            <AvatarImage src={avatar} className='object-cover' />
            <AvatarFallback className='text-blue-500'>BLES</AvatarFallback>
        </Avatar>
    );
}

export default AboutAvatar;
