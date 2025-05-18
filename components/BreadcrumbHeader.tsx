"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from './ui/breadcrumb';

const BreadcrumbHeader = () => {
    const pathName = usePathname();
    const paths = pathName === "/" ? [""] : pathName?.split("/");
    return (
        <div className='flex items-center gap-2'>
            <Breadcrumb>
                <BreadcrumbList>
                    {paths.map((path, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='capitalize' href={`/${path}`}>
                                    {path != ""? path : "Home"}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbHeader