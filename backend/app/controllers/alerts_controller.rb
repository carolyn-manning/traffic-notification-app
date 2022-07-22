class AlertsController < ApplicationController

    def index 
        alerts =  current_user.alerts
        render json: alerts
    end 

    def create
        alert = current_user.alert.create(alert_params)
        render json: alert
    end

    def destroy
        alert  = Alert.find_by(id: params[:id])
        render json: alert.destroy
    end 

    private 
    def alert_params
        params.require(:alert).permit(:origin, :destination, :time)
    end 
end
