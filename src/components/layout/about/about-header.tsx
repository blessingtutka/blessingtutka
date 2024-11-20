import AboutAvatar from './about-avatar';

function aboutHeader({ title, avatar }: { title: string; avatar: string }) {
    return (
        <div className='section-header about-header flex items-center justify-between'>
            <h2 className='text-3xl text-[#5F91FF]'>{title}</h2>
            <AboutAvatar avatar={avatar} />
        </div>
    );
}

export default aboutHeader;
