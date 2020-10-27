import AdvertisementService from '../services/advertisement-service.ts'
import { IAdvertisement } from "../interfaces/Advertisement.ts";

class AdvertisementController {
    AdvertisementService: AdvertisementService;

    constructor(AdvertisementService: AdvertisementService) {
        this.AdvertisementService = AdvertisementService;
    }

    static makeAdvertisementController = () => new AdvertisementController();

    // @desc    Fetch all advertisements
    // @route   GET /api/v1/advertisements
    public getAdvertisements = ({response}: { response: any }) => {
        response.body = {
            success: true,
            data: this.AdvertisementService.fetchAdvertisements()
        }
    }

    // @desc    Fetch single advertisement
    // @route   GET /api/v1/advertisements/:id
    getAdvertisement = ({params, response}: { params: { id: string }, response: any }) => {
        const advertisement: IAdvertisement | undefined = this.AdvertisementService.fetchAdvertisement(id);

        if(advertisement){
            response.status = 200
            response.body = {
                success: true,
                data: advertisement
            }
        } else {
                response.status = 404
                response.body = {
                    success: false,
                    msg: `Advertisement with id: ${id} not found`
                }
            }
        }

    // @desc    Add  advertisement
    // @route   POST /api/v1/advertisements
    addAdvertisement = async ({ request, response }: { request: any, response: any }) => {
         const data = await request.body();

         if(!data){
             response.status = 400
             response.body = {
                 success: false,
                 msg: 'No data'
             }
         }

         const advertisement : IAdvertisement = this.AdvertisementService.createAdvertisement(data);
         response.status = 201
         response.body = {
            success: true,
            data: advertisement
         }
    }

    // @desc    Update advertisement
    // @route   PUT /api/v1/advertisements/:id
    updateAdvertisement = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
        const advertisement: IAdvertisement | undefined = this.AdvertisementService.fetchAdvertisement(id);

        if(!advertisement) {
            response.status = 404
            response.body = {
                success: false,
                msg: `Advertisement with id: ${id} not found`
            }
        }

        const data = request.body();
        const updatedAdvertisement = this.AdvertisementService.updateAdvertisement(data);
        response.status = 200
        response.body = {
            success: true,
            data: updatedAdvertisement
        }

    }

    // @desc    Publish advertisement
    // @route   PUT /api/v1/advertisements/publish
    publishAdvertisement = async ({ request, response }: { request: any, response: any }) => {
        const data = await request.body();

        if(!data){
            response.status = 400
            response.body = {
                success: false,
                msg: 'No data'
            }
        }

        const { id, startDate, endDate, isActive} = data;
        const advertisement = this.AdvertisementService.publishAdvertisement(id,startDate,endDate);
        response.status = 200
        response.body = {
            success: isActive,
            data: advertisement
        }
    }

    // @desc    Delete advertisement
    // @route   DELETE /api/v1/advertisements/:id
    deleteAdvertisement = ({ params, response }: { params: { id: string }, response: any }) => {
        this.AdvertisementService.deleteAdvertisement(id);
        response.body = {
            success: true,
            msg: 'Advertisement removed'
        }
    }
}

export default AdvertisementController;