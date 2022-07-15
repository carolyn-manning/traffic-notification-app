User.create(phone_number: 5555555555)

Alert.create(user_id: 1, origin: "test origin 1", destination: "test destination 1", time: 1)
Alert.create(user_id: 1, origin: "test origin 2", destination: "test destination 2", time: 2)
Alert.create(user_id: 1, origin: "test origin 3", destination: "test destination 3", time: 3)
Alert.create(user_id: 1, origin: "test origin 4", destination: "test destination 4", time: 4)