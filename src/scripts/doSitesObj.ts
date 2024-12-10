
import * as f from '~/api/apiClient'
import { record } from 'astro:schema'
import {analyzeObject} from '~/scripts/utils'

interface SubCategory {
  id: number;
  name: string;
  // Add other properties your subcategory has
}

interface CategoriesTags {
  [key: string]: number;
}

const sites = f.sites.data
const areas = f.areas.data
const categories = f.categories.data
const sub_categories = f.categories.data

function findAreaById(id) {
  if (id === -1) {
    return 'Non Specificata';
  }
  const area = areas.find(area => area.id_area === id);
  console.log(`findAreaById(${id}) => ${area ? area.area : 'Unknown Area'}`);
  return area ? area.area : 'Unknown Area';
}

function findCategoryById(id) {
  if (id === -1) {
    return 'Non Specificata';
  }
  const category = categories.find(category => category.id === id);
  console.log(`findCategoryById(${id}) => ${category ? category.category : 'Unknown Category'}`);
  return category ? category.category : 'Unknown Category';
}

function findSubCategoryById(id) {
  if (id === -1) {
    return 'Non Specificata';
  }
  const subCategory = sub_categories.find(sub_category => sub_category.id === id);
  console.log(`findSubCategoryById(${id}) => ${subCategory ? subCategory.sub_category : 'Unknown Subcategory'}`);
  return subCategory ? subCategory.sub_category : 'Unknown Subcategory';
}

export const mergeSitesObj = sites.map(site => {
  const categoriesTags: CategoriesTags = site.categories_tags;
  
  if (!categoriesTags) {
    console.log(`Site with id ${site.id} has no categories_tags`);
    return {
      ...site,
      categories_tags: {
        area: 'Non Specificata',
        categoria: 'Non Specificata',
        tags: [],
        id_area: -1,
        id_cat: -1,
        ratings: null,
        AI_think: null,
        AI_summary: null,
        id_provider: null
      }
    };
  }

  const area = findAreaById(categoriesTags.id_area);
  const category = findCategoryById(categoriesTags.id_cat);

  const siteCategories = [];
  for (const key  in categoriesTags) {
    if (key.startsWith('id_tag_')) {
      const categoryId = categoriesTags[key];
      if (categoryId !== -1) {
        const subCategory = findSubCategoryById(categoryId)
        siteCategories.push(subCategory)
      }
    }
  }

  /*console.log(`Site with id ${site.id}:`, {
    area: area,
    categoria: category,
    tags: siteCategories,
    id_area: categoriesTags.id_area,
    id_cat: categoriesTags.id_cat,
    ratings: categoriesTags.ratings,
    AI_think: categoriesTags.AI_think,
    AI_summary: categoriesTags.AI_summary,
    id_provider: categoriesTags.id_provider
  })
  */

  return {
    ...site,
    categories_tags: {
      area: area,
      categoria: category,
      tags: siteCategories,
      id_area: categoriesTags.id_area,
      id_cat: categoriesTags.id_cat,
      ratings: categoriesTags.ratings,
      AI_think: categoriesTags.AI_think,
      AI_summary: categoriesTags.AI_summary,
      id_provider: categoriesTags.id_provider
    }
  }
})

//console.log(mergeSitesObj)
//console.log(f.site)
/* debug 
console.log("Analisi di mergeSitesObj:");
analyzeObject(mergeSitesObj, 'mergeSitesObj');

console.log("\nAnalisi di f.site:");
analyzeObject(f.site, 'f.site');

// Per confrontare i due oggetti
function areObjectsEqual(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log("\nSono identici?", areObjectsEqual(mergeSitesObj, f.site))

console.log(analyzeObject(mergeSitesObj))
*/



