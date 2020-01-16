import authAxios from 'modules/shared/axios/authAxios';

export default class ZwierzakService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await authAxios.put(
      `/zwierzak/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await authAxios.delete(`/zwierzak`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await authAxios.post(
      `/zwierzak`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const response = await authAxios.post(
      `/zwierzak/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await authAxios.get(`/zwierzak/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(`/zwierzak`, {
      params,
    });

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const response = await authAxios.get(
      `/zwierzak/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
