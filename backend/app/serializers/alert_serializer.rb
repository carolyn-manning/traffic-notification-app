class AlertSerializer < ActiveModel::Serializer
    attributes :origin, :destination, :time
end