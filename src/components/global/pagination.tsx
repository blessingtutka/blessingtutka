import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevClick = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // }, [currentPage]);

    return (
        <div className='flex flex-1 items-center justify-center gap-4 py-3'>
            <button
                onClick={handlePrevClick}
                disabled={currentPage === 1}
                className='w-9 h-9 flex justify-center items-center  rounded-full hover:bg-gray-800 disabled:opacity-50
                border border-[#008bff]'
            >
                <ChevronLeft className='text-[#008bff] w-7 h-7' />
            </button>
            <span className='text-lg w-max text-white'>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
                className='w-9 h-9 flex justify-center items-center  rounded-full hover:bg-gray-800 disabled:opacity-50
                border border-[#008bff]'
            >
                <ChevronRight className='text-[#008bff] w-7 h-7' />
            </button>
        </div>
    );
};

export default Pagination;
