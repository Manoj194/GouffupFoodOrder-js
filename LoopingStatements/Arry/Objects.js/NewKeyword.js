var mobile =new Object()

mobile.brand="Redmi"
mobile.manufacturingCountry="china"
mobile.Configuration={Ram:"4GB",StorageArea:"64GB",version:10},

mobile.cost=function() {
    return 80000
}
console.log(mobile);
console.log(mobile.Configuration);
console.log(mobile.Configuration.StorageArea);