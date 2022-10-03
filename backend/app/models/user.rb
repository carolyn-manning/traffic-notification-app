class User < ApplicationRecord
    has_secure_password
    has_many :alerts
    validates :phone_number, uniqueness: true, presence: true    
    validates :password, presence: true   
end
