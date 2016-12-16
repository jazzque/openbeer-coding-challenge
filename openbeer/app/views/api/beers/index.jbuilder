json.beers @beers do |beer|
  json.id beer.id
  json.brewery_id beer.brewery_id
  json.name beer.name
  json.descript beer.descript
  json.created_at beer.created_at
end

json.breweries @breweries do |brewery|
  json.id brewery.id
  json.name brewery.name
  json.address brewery.address
  json.city brewery.city
  json.country brewery.country
  json.descript brewery.descript
  json.created_at brewery.created_at
end