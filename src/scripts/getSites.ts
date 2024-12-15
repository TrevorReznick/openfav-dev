
import * as f from '~/api/apiClient'
import * as utils from '~/scripts/getSitesUtils'

const sites = f.sites.data

console.log('firts log', f.all_categories)



export const getSites = sites.map(site => {
  const categoriesTags = site.categories_tags; // Ora stai mappando correttamente per ogni sito

  if (!categoriesTags) {
    console.log(`Site with id ${site.id} has no categories_tags`);
    return {
      id: site.id,
      description: site.description,
      icon: site.icon,
      image: site.image,
      logo: site.logo,
      name: site.name,
      title: site.title,
      url: site.url,
      area: { id: -1, area: 'Non Specificata' },
      categoria: { id: -1, category: 'Non Specificata' },
      tags: [],
      ratings: categoriesTags ? categoriesTags.ratings : null,
      AI_think: categoriesTags ? categoriesTags.AI_think : null,
      AI_summary: categoriesTags ? categoriesTags.AI_summary : null,
      id_provider: categoriesTags ? categoriesTags.id_provider : null
    };
  }

  const area = utils.findAreaById(categoriesTags.id_area)
  const category = utils.findCategoryById(categoriesTags.id_cat)

  const siteCategories = [
    utils.findSubCategoryById(categoriesTags.tag_3),
    utils.findSubCategoryById(categoriesTags.tag_4),
    utils.findSubCategoryById(categoriesTags.tag_5)
  ].filter(tag => tag.sub_category !== 'Non Specificata')

  console.log(`Site with id ${site.id}:`, {
    area: area,
    categoria: category,
    tags: siteCategories,
    ratings: categoriesTags.ratings,
    AI_think: categoriesTags.AI_think,
    AI_summary: categoriesTags.AI_summary,
    id_provider: categoriesTags.id_provider
  })

  return {
    id: site.id,
    description: site.description,
    icon: site.icon,
    image: site.image,
    logo: site.logo,
    name: site.name,
    title: site.title,
    url: site.url,
    area: area,
    categoria: category,
    tags: siteCategories, // Ecco il cambio: ora tags è un array di oggetti
    ratings: categoriesTags.ratings,
    AI_think: categoriesTags.AI_think,
    AI_summary: categoriesTags.AI_summary,
    id_provider: categoriesTags.id_provider
  }
})

//console.log('sites refactored', updatedSites)

export const tags = getSites.map((item) => {return item.tags})

//console.log('debug tags', tags)
