let checkSkill = {
    Management : false, CustomerSupport : true
    , InformationTechnology : false, Teaching : true }

let filterSkill = Object.keys(checkSkill).filter(kii => checkSkill[kii] === true);
console.log(filterSkill);