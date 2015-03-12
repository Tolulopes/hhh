json.array!(@itineraries) do |itinerary|
  json.extract! itinerary, :id, :days
  json.url itinerary_url(itinerary, format: :json)
end
