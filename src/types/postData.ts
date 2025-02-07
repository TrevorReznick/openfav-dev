export type postData = {
    id_src: number
    accessible: boolean
    AI: boolean
    AI_Summary?: string
    AI_think?: string
    description: string
    domain_exists: boolean
    html_content_exists: boolean
    icon?: string
    id_area: number
    id_cat?: number
    id_provider?: number
    image?: string
    is_public: boolean
    logo?: string
    name: string
    ratings?: number
    secure: boolean
    status_code: number
    tag_3?: number
    tag_4?: number
    tag_5?: number
    title: string
    type: string
    url: string
    user_id: string
    valid_url: boolean
    /* classification data */
    site_id: number,
    context_id: number,
    function_id: number,
    resource_id: number,
}


