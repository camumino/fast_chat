json.array!(@messages) do |message|
  json.extract! message, :id, :comment, :created_at
end
