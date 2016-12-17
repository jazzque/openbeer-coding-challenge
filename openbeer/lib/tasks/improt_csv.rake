require 'csv'

task :import_csv => :environment do |task|
  csv_text = File.open('breweries.csv')
  csv = CSV.parse(csv_text, headers: true)

  csv.each do |row|
    attrs = row.to_hash.except!("address2", "code", "website", "filepath", "last_mod")
    attrs["address"] = attrs.delete "address1"

    Brewery.create!(attrs)
  end

  csv_text = File.open('beers.csv')
  csv = CSV.parse(csv_text, headers: true)

  csv.each do |row|
    attrs = row.to_hash.except!("abv", "ibu", "srm", "upc", "filepath", "last_mod", nil)

    begin
      Beer.create!(attrs)
    rescue
    end
  end
end
