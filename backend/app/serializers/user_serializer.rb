class UserSerializer < ActiveModel::Serializer
    attributes :phone_number
    has_many :alerts, serializer: AlertSerializer
end