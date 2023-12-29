import Image from 'next/image';
import { SidebarItem } from './SidebarItem';
import {
    IoBasketOutline,
    IoCalendarOutline,
    IoCheckboxOutline,
    IoCodeWorkingOutline,
} from 'react-icons/io5';
import { getServerSession } from 'next-auth';
import { Button } from './Button';
import authOptions from '@/actions/options';

const menuItem = [
    {
        icon: <IoCalendarOutline />,
        title: 'Dashboard',
        path: '/dashboard',
    },
    {
        icon: <IoCheckboxOutline />,
        title: 'Tasks',
        path: '/dashboard/tasks',
    },
    {
        icon: <IoCodeWorkingOutline />,
        title: 'Cookies',
        path: '/dashboard/cookies',
    },
    {
        icon: <IoBasketOutline />,
        title: 'Products',
        path: '/dashboard/products',
    },
];

export const Sidebar = async () => {
    const session = await getServerSession(authOptions);

    const avatar: string | undefined = session?.user?.image
        ? session?.user?.image
        : '/images/user.png';

    const name: string | undefined = session?.user?.name ?? '';

    const userRoles = session?.user?.roles ?? ['client'];

    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="mt-8 text-center">
                    <Image
                        src={avatar}
                        alt=""
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                        width={150}
                        height={150}
                        priority
                    />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                        {name}
                    </h5>
                    <span className="hidden text-gray-400 lg:block capitalize">
                        {userRoles}
                    </span>
                </div>
                <ul className="space-y-2 tracking-wide mt-8">
                    {menuItem.map((item, index: number) => (
                        <SidebarItem key={index} {...item} />
                    ))}
                </ul>
            </div>
            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <Button />
            </div>
        </aside>
    );
};
