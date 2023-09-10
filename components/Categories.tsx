'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { categoryFilters } from '@/constants'

const Categories = () => {
    const router = useRouter();
    const pathName = usePathname();
    const searchParamms = useSearchParams();

    const category = searchParamms.get('category')

    const handleTags = (filter: string) => {
        router.push(`${pathName}?category=${filter}`)
    }

    return (
        <div className='flexBetween w-full gap-5 flex-wrap'>
            <ul className='flex gap-2 overflow-auto'>
                {
                    categoryFilters.map((filter) => (
                        <button
                            key={filter}
                            type='button'
                            onClick={() => handleTags(filter)}
                            className={`px-4 py-3 rounded-lg capitalize whitespace-nowrap
                                ${category === filter 
                                    ? 'bg-light-white-300 font-medium'
                                    : 'font-normal'
                                }
                            `}
                        >
                            {filter}
                        </button>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories
