import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import container from "../../../src/inversify.config";
import { httpResponseHandlerMiddleware } from "../../../src/middleware/httpResponseHandlerMiddleware";
import { Invitation } from "../../../src/entities/Invitation";
import { TYPES } from "../../../src/types";
import IOuthouseInvitationAdapter from "../../../src/modules/invitations/adapter/interfaces/IOuthouseInvitationAdapter";
import { IInvitationPaginationQueryDTO } from "../../../src/modules/invitations/domain/dto/IInvitationPaginationQuery.dto";
import { httpJoiValidatorMiddleware, VALIDATOR_TYPE } from "../../../src/middleware/httpJoiValidatorMiddleware";

import { OuthouseInvitationPatchSC } from "../../../src/modules/invitations/adapter/schemas/OuthouseInvitationPatchSC";
import { OuthouseInvitationFindByInvoiceSC } from "../../../src/modules/invitations/adapter/schemas/OuthouseInvitationFindByInvoiceSC";
import { OuthouseInvitationFindPaginatedSC } from "../../../src/modules/invitations/adapter/schemas/OuthouseInvitationFindPaginatedSC";
import { IRequestPutOuthouseInvitationDto } from "../../../src/modules/invitations/domain/dto/IRequestPutOuthouseInvitationDTO";
import { OuthouseInvitationInvoiceSC } from '../../../src/modules/invitations/adapter/schemas/OuthouseInvitationInvoiceSC';
import IOuthouseInvitationRemoveDTO from '../../../src/dto/Invitation/IOuthouseInvitationRemoveDTO';
import { OuthouseInvitationRemoveSC } from '../../../src/modules/invitations/adapter/schemas/OuthouseInvitationRemoveSC';

/**
 * @function findOuthouseInvitationByInvoice
 * @description Get invitations by invoice
 * returns {Promise<IOuthouseInvitationAdapter>}
 * @version 1.0.0
 * summary: Get an invitation by invoice for serverless
 * @param event
 */
const findOuthouseInvitationByInvoice = middy(async (event) => {
  //Outhouse invitations adapter is injected
  const iOuthouseInvitationAdapter: IOuthouseInvitationAdapter = container.get<IOuthouseInvitationAdapter>(
    TYPES.OuthouseInvitationAdapter
  );
  //Get the invoice from the event
  const outhouseInvitation = await iOuthouseInvitationAdapter.getByInvoice(event.pathParameters.invoice);
  return outhouseInvitation;
});

findOuthouseInvitationByInvoice
  .use(httpResponseHandlerMiddleware())
  .use(httpJsonBodyParser())
  .use(
    httpJoiValidatorMiddleware({
      schema: OuthouseInvitationInvoiceSC,
      type: VALIDATOR_TYPE.PATH,
      pathParam: "invoice",
    })
  );

/**
 * @function findOuthouseInvitationsPaginated
 * @param event
 * @description Get invitations pagination
 * returns {Promise<IPaginationResponseDTO>}
 * @version 1.0.0
 * summary: Get invitations pagination for serverless
 */
const findOuthouseInvitationsPaginated = middy(async (event) => {
  try {
    const iOuthouseInvitationAdapter: IOuthouseInvitationAdapter = container.get<IOuthouseInvitationAdapter>(
      TYPES.OuthouseInvitationAdapter
    );
    const pageNumber = event.queryStringParameters?.pageNumber || 1;
    const size = event.queryStringParameters?.size || 10;
    const sort = event.queryStringParameters?.sort;
    const filter = event.queryStringParameters?.filter;
    const status = event.queryStringParameters?.status || "";
    const startDate = event.queryStringParameters?.startDate;
    const endDate = event.queryStringParameters?.endDate;
    const invitations = await iOuthouseInvitationAdapter.getPaginated({
      pageNumber,
      size,
      sort,
      filter,
      status,
      startDate,
      endDate,
    } as IInvitationPaginationQueryDTO);

    return invitations;
  } catch (error) {
    console.log(error);
  }
});

findOuthouseInvitationsPaginated
  .use(httpResponseHandlerMiddleware())
  .use(httpJsonBodyParser())
  .use(
    httpJoiValidatorMiddleware({
      schema: OuthouseInvitationFindPaginatedSC,
      type: VALIDATOR_TYPE["QUERY"],
    })
  );

/**
 * @function putOuthouseInvitation
 * @param event
 * @description Finds or creates an invitation
 * returns {Promise<Invitation>}
 * @version 1.0.0
 * summary: Finds or creates an invitation
 */
const putOuthouseInvitation = middy(async (event) => {
  const iOuthouseInvitationAdapter: IOuthouseInvitationAdapter = container.get<IOuthouseInvitationAdapter>(
    TYPES.OuthouseInvitationAdapter
  );
  console.log("handler");
  const invitation = await iOuthouseInvitationAdapter.put(event.pathParameters as IRequestPutOuthouseInvitationDto);
  return invitation;
});

putOuthouseInvitation
  .use(httpResponseHandlerMiddleware())
  .use(httpJsonBodyParser())
  .use(
    httpJoiValidatorMiddleware({
      schema: OuthouseInvitationInvoiceSC,
      type: VALIDATOR_TYPE.PATH,
      pathParam: "invoice",
    })
  );

/**
 * @function patchOuthouseInvitation
 * @param event
 * @description Partially updates an invitation
 * returns {Promise<Invitation>}
 * @version 1.0.0
 * summary: Partially updates an invitation
 */
const patchOuthouseInvitation = middy(async (event) => {
  const iOuthouseInvitationAdapter: IOuthouseInvitationAdapter = container.get<IOuthouseInvitationAdapter>(
    TYPES.OuthouseInvitationAdapter
  );
  const invitation = await iOuthouseInvitationAdapter.patch(
    event.body as Partial<Invitation>,
    event.pathParameters.id as string
  );
  return invitation;
});

patchOuthouseInvitation
  .use(httpResponseHandlerMiddleware())
  .use(httpJsonBodyParser())
  .use(
    httpJoiValidatorMiddleware({
      schema: OuthouseInvitationPatchSC,
      type: VALIDATOR_TYPE["BODY"],
    })
  );

/**
 * @function removeOuthouseInvitation
 * @param event
 * @description Deletes an invitation
 * returns {Promise<Invitation>}
 * @version 1.0.0
 * summary: Deletes an invitation
 */

const removeOuthouseInvitation = middy(async (event) => {
  const iOuthouseInvitationAdapter: IOuthouseInvitationAdapter = container.get<IOuthouseInvitationAdapter>(
    TYPES.OuthouseInvitationAdapter
  );
  const response = await iOuthouseInvitationAdapter.remove(
    event.pathParameters.id as string,
    event.body as IOuthouseInvitationRemoveDTO
  );
  return response;
});

removeOuthouseInvitation
  .use(httpResponseHandlerMiddleware())
  .use(httpJsonBodyParser())
  .use(
    httpJoiValidatorMiddleware({
      schema: OuthouseInvitationRemoveSC,
      type: VALIDATOR_TYPE["BODY"],
    })
  );

/**
 * @function findCountGroupByStatus
 * @param event
 * @description Get count group by status
 * returns {Promise<Invitation[]>}
 * @version 1.0.0
 * summary: Get count group by status
 */

const findCountGroupByStatus = middy(async (event) => {
  const iOuthouseInvitationAdapter: IOuthouseInvitationAdapter = container.get<IOuthouseInvitationAdapter>(
    TYPES.InvitationsAdapter
  );

  const pageNumber = event.queryStringParameters?.pageNumber || 1;
  const size = event.queryStringParameters?.size || 10;
  const sort = event.queryStringParameters?.sort;
  const filter = event.queryStringParameters?.filter;
  const status = event.queryStringParameters?.status || "";
  const startDate = event.queryStringParameters?.startDate || undefined;
  const endDate = event.queryStringParameters?.endDate || undefined;

  const response = await iOuthouseInvitationAdapter.getCountGroupByStatus({
    pageNumber,
    size,
    sort,
    filter,
    status,
    startDate,
    endDate,
  });
  return response;
});

findCountGroupByStatus.use(httpResponseHandlerMiddleware()).use(httpJsonBodyParser());

module.exports = {
  findOuthouseInvitationByInvoice,
  putOuthouseInvitation,
  findOuthouseInvitationsPaginated,
  patchOuthouseInvitation,
  removeOuthouseInvitation,
  findCountGroupByStatus,
};
