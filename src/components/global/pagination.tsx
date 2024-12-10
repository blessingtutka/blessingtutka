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

    return (
        <div className='flex items-center justify-center mt-4 space-x-2'>
            <button
                onClick={handlePrevClick}
                disabled={currentPage === 1}
                className='w-6 h-6 flex justify-center items-center  rounded-full disabled:opacity-50'
            >
                <ChevronLeft className='text-[#008bff] w-5 h-5' />
            </button>
            <span className='text-lg'>
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
                className='w-6 h-6 flex justify-center items-center  rounded-full disabled:opacity-50'
            >
                <ChevronRight className='text-[#008bff] w-5 h-5' />
            </button>
        </div>
    );
};

export default Pagination;
