class User < ApplicationRecord
    has_many :alerts
    validates :phone_number, uniqueness: true, presence:true    
end
