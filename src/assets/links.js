import { FaChartPie, FaTicketAlt, FaLightbulb } from 'react-icons/fa';
import { IoMdContacts } from 'react-icons/io';
import { SlBadge } from 'react-icons/sl';
import { MdPersonalInjury, MdArticle, MdOutlineSettings } from 'react-icons/md';

export const links = [
  {
    id: 0,
    label: 'Overview',
    icon: <FaChartPie />,
  },
  {
    id: 1,
    label: 'Tickets',
    icon: <FaTicketAlt />,
  },
  {
    id: 2,
    label: 'Ideas',
    icon: <FaLightbulb />,
  },
  {
    id: 3,
    label: 'Contacts',
    icon: <IoMdContacts />,
  },
  {
    id: 4,
    label: 'Agents',
    icon: <MdPersonalInjury />,
  },
  {
    id: 5,
    label: 'Articles',
    icon: <MdArticle />,
  },
];

export const otherLinks = [
  {
    id: 6,
    label: 'Settings',
    icon: <MdOutlineSettings />,
  },
  {
    id: 7,
    label: 'Subscription',
    icon: <SlBadge />,
  },
];
