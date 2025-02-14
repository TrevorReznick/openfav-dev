
import * as f from '~/api/apiClientV1'

const sites = f.sites.data
const areas = f.areas.data
const categories = f.categories.data
const sub_categories = f.sub_categories.data // Assicurati che sub_categories sia correttamente definito

console.log('firts log', f.all_categories)

function findAreaById(id) {
    if (id === -1) {
      return { id: -1, area: 'Non Specificata' };
    }
    const area = areas.find(area => area.id_area === id);
    console.log(`findAreaById(${id}) => ${area ? area.area : 'Unknown Area'}`);
    return area ? { id: area.id_area, area: area.area } : { id: -1, area: 'Unknown Area' };
  }

function findCategoryById(id) {
    if (id === -1) {
      return { id: -1, category: 'Non Specificata' };
    }
    const category = categories.find(category => category.id === id);
    console.log(`findCategoryById(${id}) => ${category ? category.category : 'Unknown Category'}`);
    return category ? { id: category.id, category: category.category } : { id: -1, category: 'Unknown Category' };
}


function findSubCategoryById(id) {
  if (id === -1) {
    return { id: -1, sub_category: 'Non Specificata' };
  }
  const subCategory = sub_categories.find(sub_category => sub_category.id === id);
  console.log(`findSubCategoryById(${id}) => ${subCategory ? subCategory.sub_category : 'Unknown Subcategory'}`);
  return subCategory ? { id: subCategory.id, sub_category: subCategory.sub_category } : { id: -1, sub_category: 'Unknown Subcategory' };
}

export {findAreaById, findCategoryById, findSubCategoryById}

