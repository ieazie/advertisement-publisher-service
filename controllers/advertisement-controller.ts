import AdvertisementService from "../services/advertisement-service.ts";

// @desc    Fetch all advertisements
// @route   GET /api/v1/advertisements
export const getAdvertisements = ({ response }: { response: any }) => {
  response.body = {
    data: AdvertisementService.instance().fetchAdvertisements(),
  };
};

// @desc    Fetch single advertisement
// @route   GET /api/v1/advertisement/:id
export const getAdvertisement = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const advertisement = AdvertisementService.instance().fetchAdvertisement(
    params.id,
  );

  if (advertisement === null) {
    response.status = 400;
    response.body = { msg: `Advertisement with id: ${params.id} not found` };
    return;
  }

  response.status = 200;
  response.body = { data: advertisement };
};

// @desc    Add  advertisement
// @route   POST /api/v1/advertisements
export const addAdvertisement = async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.body()) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "The request must have a body",
    };
    return;
  }

  const data = await request.body().value;

  const advertisement = AdvertisementService.instance().createAdvertisement(
    data,
  );
  response.status = 200;
  response.body = {
    success: true,
    data: advertisement,
  };
};

// @desc    Update advertisement
// @route   PUT /api/v1/advertisements/:id
export const updateAdvertisement = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const advertisement = AdvertisementService.instance().fetchAdvertisement(
    params.id,
  );

  if (!advertisement) {
    response.status = 404;
    response.body = {
      success: false,
      msg: `Advertisement with id: ${params.id} not found`,
    };
  }

  const data = request.body().value;
  const updatedAdvertisement = AdvertisementService.instance()
    .updateAdvertisement(
      data,
    );
  response.status = 200;
  response.body = {
    success: true,
    data: updatedAdvertisement,
  };
};

// @desc    Publish advertisement
// @route   PUT /api/v1/advertisements/publish
export const publishAdvertisement = async (
  { request, response }: { request: any; response: any },
) => {
  const data = await request.body().value;

  if (!data) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  }

  const { id, startDate, endDate, isActive } = data;
  const advertisement = AdvertisementService.instance().publishAdvertisement(
    id,
    startDate,
    endDate,
    isActive,
  );
  response.status = 200;
  response.body = {
    success: isActive,
    data: advertisement,
  };
};

// @desc    Delete advertisement
// @route   DELETE /api/v1/advertisements/:id
export const deleteAdvertisement = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const advertisement = AdvertisementService.instance().deleteAdvertisement(
    params.id,
  );
  response.body = {
    success: true,
    msg: "Advertisement removed",
    data: advertisement,
  };
};
