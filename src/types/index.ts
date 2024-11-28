import type { HTMLAttributes } from 'astro/types'
//import { Activity, type Bot, type Book, type Bookmark, type Clock, type Folder, type Link, type List, type Logs, type FolderHeart, type Star } from 'lucide-react'


export type ActionType = 
    'Created List' 
    | 'Updated List' 
    | 'Deleted List' 
    | 'Added link' 
    | 'Deleted link'

export type ListType =
    'urls'
    | 'lists'
    | 'favourites'
    | 'suggestions'
    | 'activities'

export type MyIconType = 
    'activity'
    | 'bot'
    | 'book'
    | 'bookmark'
    | 'clock'
    | 'folder'
    | 'link'
    | 'list'
    | 'logs'
    | 'folderHeart'
    | 'star'

export interface ActivityItem {
  action: ActionType
  actionIcon: MyIconType
  timestamp?: string | null
  name?: string | null
  description?: string | null
  url?: string | null
}

export interface CardProps {
    typeList: ListType
    cardName: string
    cardIcon: string | MyIconType
    activities: ActivityItem[]
    action_url?: string
}

/* end new */



export interface genericCardItem {
    card_name?: string
    card_icon?: any
}
export interface personalCardListItem extends genericCardItem {
    name?: string
    description?: string
    icon?: string
}

export interface FeatureItem extends genericCardItem {
    title: string;
    description?: string;
    icon: string;
}

export interface RecentActivity extends genericCardItem {
    newLinks: number,
    updatedLists: number,
    updatesFavorites: number,
    lastActive: string
}

export interface UserActivity extends genericCardItem {
    id: number,
    user: string,
    action: string,
    timestamp: string
}

export type GeneralCardItemType = personalCardListItem[] | FeatureItem[] | RecentActivity[] | UserActivity[]
		

/* @@ Metadata @@ */

export interface MetaData {
    title?: string
    ignoreTitleTemplate?: boolean  
    canonical?: string  
    robots?: MetaDataRobots  
    description?: string  
    openGraph?: MetaDataOpenGraph
    twitter?: MetaDataTwitter
}

export interface MetaDataRobots {
    index?: boolean;
    follow?: boolean;
}
 
export interface MetaDataImage {
    url: string;
    width?: number;
    height?: number;
}
  
export interface MetaDataOpenGraph {
    url?: string;
    siteName?: string;
    images?: Array<MetaDataImage>;
    locale?: string;
    type?: string;
}
  
export interface MetaDataTwitter {
    handle?: string;
    site?: string;
    cardType?: string;
}

export interface Form {
    inputs?: Array<Input>;
    textarea?: Textarea;
    disclaimer?: Disclaimer;
    button?: string;
    description?: string;
}

/* @@ Widgets @@ */

export interface Widget {
    id?: string;
    isDark?: boolean;
    bg?: string;
    classes?: Record<string, string | Record<string, string>>;
}

export interface Hero extends Omit<Headline, 'classes'>, Omit<Widget, 'isDark' | 'classes'> {
    content?: string;
    actions?: string | CallToAction[];
    image?: string | unknown;
}

export interface Image {
    src: string;
    alt?: string;
}
  
  export interface Video {
    src: string;
    type?: string;
}
  
export interface Widget {
    id?: string;
    isDark?: boolean;
    bg?: string;
    classes?: Record<string, string | Record<string, string>>;
 }

export interface Headline {
    title?: string;
    subtitle?: string;
    tagline?: string;
    classes?: Record<string, string>;
}

export interface Item {
    title?: string
    description?: string
    icon?: string
    classes?: Record<string, string>
    callToAction?: CallToAction
    image?: Image
    link?: string
}


type HTMLInputTypeAttribute = 	| 'button'	| 'checkbox'	| 'color'	| 'date'	| 'datetime-local'	| 'email'	| 'file'	| 'hidden'	| 'image'	| 'month'	| 'number'	| 'password'	| 'radio'	| 'range'	| 'reset'	| 'search'	| 'submit'	| 'tel'	| 'text'	| 'time'	| 'url'	| 'week';

export interface Input {
    type: HTMLInputTypeAttribute;
    name: string;
    label?: string;
    autocomplete?: string;
    placeholder?: string;
}

export interface Textarea {
    label?: string;
    name?: string;
    placeholder?: string;
    rows?: number;
}

export interface Disclaimer {
    label?: string;
}

/* @@ Components @@ */

export interface CallToAction extends Omit<HTMLAttributes<'a'>, 'slot'> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset'
}

export interface Login extends Omit<Headline, 'classes'>, Form, Widget {}
export interface Contact extends Omit<Headline, 'classes'>, Form, Widget {}

export interface Features extends Omit<Headline, 'classes'>, Widget {
    image?: string | unknown;
    video?: Video;
    items?: Array<Item>;
    columns?: number;
    defaultIcon?: string;
    callToAction1?: CallToAction;
    callToAction2?: CallToAction;
    isReversed?: boolean;
    isBeforeContent?: boolean;
    isAfterContent?: boolean;
}
