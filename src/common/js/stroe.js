/**
 * 存储数据到localStorage中
 * @param id   用户店面id
 * @param key  健
 * @param value  值
 */

export function saveToLoocal (id, key, value) {
  let seller = window.localStorage._seller_
  if (!seller) {
  	seller = {}
  	seller[id] = {}
  } else {
  	seller = JSON.parse(seller)
  	if (!seller[id]) {
  	  seller[id] = {}
  	}
  }
  seller[id][key] = value
  window.localStorage._seller_ = JSON.stringify(seller)
}

/**
 * 从localStorage中取值
 * @param id   用户店面id
 * @param key  健
 * @param def  默认值
 */

export function loadFromLocal (id, key, def) {
  let seller = window.localStorage._seller_
  if (!seller) {
  	return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
  	return def
  }
  let ret = seller[key]
  return ret || def
}
