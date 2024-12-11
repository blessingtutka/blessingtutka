import { useState } from 'react';
import { SectionHeader } from '@/components/global';
import { Pagination } from '@/components/global';
import { projects } from '@/data';
import Projects from './projects';

const Project = () => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className='project relative pb-4' id='project'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <SectionHeader title='Project' image='./images/project.jpg' />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </div>
                <Projects projectsPaginated={currentProjects} />
            </div>
        </div>
    );
};

export default Project;
