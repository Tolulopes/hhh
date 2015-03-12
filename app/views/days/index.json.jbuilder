json.array!(@days) do |day|
  json.extract! day, :id, :events
  json.url day_url(day, format: :json)
end
