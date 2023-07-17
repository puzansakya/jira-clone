interface QueryProps {
  model: any;
  page?: string;
  limit?: string;
  search?: string;
  join?: string;
  sort?: string;
  order?: string;
  select?: string;
  fields?: string;
  eager?: any;
  where?: any;
}

interface GetByIdProps extends QueryProps {
  id: any
}
class BaseService {

  /**
   * FETCH ALL DATA WITH PAGINATION
   * EXAMPLE: 
   * events?page=1&size=12&search=Car&fields=name,description&sort=id&order=desc&select=name,description
   * localhost:8000/api/v1/claszs?eager=teacher&select=classes.id,classes.class,teacher.first_name as teacher_fname,teacher.last_name as teacher_lname&join=teacher&strWhere=classes.is_deleted:false
   * @param param0 
   * @returns 
   */
  public async _get_all_paged({
    model,
    page = '1',
    limit = '10',
    search,
    sort,
    order,
    fields,
    eager,
    select,
    join,
    where,
  }: QueryProps) {
    const _fields = fields ? fields.split(',') : [];
    const _select = select ? select.split(',') : [];

    let _page = parseInt(page, 10);

    if (isNaN(_page) || _page < 1) {
      _page = 1;
    }

    let _limit = parseInt(limit, 10);

    if (isNaN(_limit)) {
      _limit = 10;
    } else if (_limit > 50) {
      _limit = 50;
    } else if (_limit < 1) {
      _limit = 1;
    }

    const offset = _page - 1;

    const query = model.query();

    if (search && _fields?.length > 0) {
      _fields.forEach(field => {
        query.orWhere(field, 'like', '%' + search + '%');
      });
    }

    if (join) {
      query.joinRelated(join)
    }

    if (sort != undefined) {
      if (order != undefined) {
        query.orderBy(sort, order);
      }
    }

    if (eager) {
      query.withGraphFetched(eager);
    }

    if (where) {
      const whereSplited = where.split(',');
      const convertedWhereObject = {};
      whereSplited.forEach(b => {
        const innerSplited = b.split(":")
        if (innerSplited?.length === 3) {
          query.where(...innerSplited)
        } else {

          let val = innerSplited[1]

          if (val === "true") {
            val = true
          }
          if (val === "false") {
            val = false
          }

          convertedWhereObject[innerSplited[0]] = val
        }
      })

      query.where(convertedWhereObject);
    }

    if (_select) {
      query.select(..._select);
    }

    const dataset = await query.page(offset, limit).debug(true);

    const response = {
      data: dataset.results,
      paged: {
        page: _page - 1,
        limit: _limit,
        rowCount: dataset.total,
        pageCount: Math.ceil(dataset.total / _limit),
      },
    };

    return response;
  }

  /**
   * fetch all data without pagination
   * @param param0 
   * @returns 
   */
  public async _get_all({
    model,
    search,
    fields,
    sort,
    order,
    eager,
    where,
  }: {
    model: any;
    search?: string;
    order?: string;
    sort?: string;
    fields?: string;
    eager?: any;
    where?: any;
  }) {
    const _fields = fields ? fields.split(',') : [];

    const query = model.query();


    if (search && _fields?.length > 0) {
      _fields.forEach(field => {
        query.orWhere(field, 'like', '%' + search + '%');
      });
    }

    if (sort != undefined) {
      if (order != undefined) {
        query.orderBy(sort, order);
      }
    }

    if (eager) {
      query.withGraphFetched(eager);
    }
    if (where) {
      const whereSplited = where.split(',');
      const convertedWhereObject = {};
      whereSplited.forEach(b => {
        const innerSplited = b.split(":")
        let val = innerSplited[1]

        if (val === "true") {
          val = true
        }
        if (val === "false") {
          val = false
        }

        convertedWhereObject[innerSplited[0]] = val
      })

      query.where(convertedWhereObject);
    }

    const dataset = await query.debug(true);

    return dataset;
  }


  /**
   * FETCH SINGLE WITH PROVIDED ID
   * @param Model 
   * @param id 
   * @param eager 
   * @returns 
   */
  public async _get_by_id({
    model,
    eager,
    select,
    join,
    where,
    id
  }: GetByIdProps) {

    const _select = select ? select.split(',') : [];

    const query = model.query();

    if (eager) {
      query.withGraphFetched(eager);
    }

    if (where) {
      const whereSplited = where.split(',');
      const convertedWhereObject = {};
      whereSplited.forEach(b => {
        const innerSplited = b.split(":")
        let val = innerSplited[1]

        if (val === "true") {
          val = true
        }
        if (val === "false") {
          val = false
        }

        convertedWhereObject[innerSplited[0]] = val
      })

      query.where(convertedWhereObject);
    }

    if (_select) {
      query.select(..._select);
    }


    const response = await query.findById(id).debug(true);

    if (response) {
      return response;
    }

    throw { message: 'notfound' };
  }

  /**
   * CREATE ENTITY
   * @param Model 
   * @param payload 
   * @returns 
   */
  public async _create(Model: any, payload: any) {
    return await Model.query().insert(payload);
  }

  /**
   * BULK INSERT WITH PROVIDED GRAPH
   * @param Model 
   * @param payload 
   * @returns 
   */
  public async _create_graph(Model: any, payload: any) {
    return await Model.query().insertGraph(payload);
  }

  /**
   * BULK INSERT WITH PROVIDED GRAPH
   * @param Model
   * @param payload
   * @returns
   */
  public async _update_graph(Model: any, payload: any) {
    return await Model.query().upsertGraph(payload);
  }

  /**
   * UPDATE ENNTITY
   * @param Model 
   * @param id 
   * @param payload 
   * @param fields 
   * @returns 
   */
  public async _update({ Model, payload }: { Model: any, payload: any }) {
    const { id } = payload
    const result = await Model.query()
      .findById(id)
      .debug(true);

    if (result) {
      return await Model.query()
          .patch({...result, ...payload, modifiedAt: new Date()})
          .where({id: id});
    }

    throw { message: 'not found with id ' + id };
  }

  /**
   * DELETE ENTITY PERMANENTLY
   * @param Model 
   * @param id 
   * @returns 
   */
  public async _delete(Model: any, id: string) {
    const result = await Model.query()
      .findById(id)
      .debug(true);

    if (!result) {
      throw {
        message: 'not found with id ' + id,
      };
    }

    await Model.query().deleteById(id);

    return { message: 'delete success' };

  }

  /**
   * DELETE ENTITY TEMPORARY
   * @param Model 
   * @param id 
   * @returns 
   */
  public async _soft_delete(Model: any, id: string) {
    const result = await Model.query()
      .findById(id)
      .debug(true);

    if (!result) {

      throw {
        message: 'not found with id ' + id,
      };

    }
    await Model.query()
      .patch({
        is_deleted: true,
      })
      .where({ id: id })
      .debug(true);

    return { message: 'delete success' };
  }
}

export default new BaseService();
