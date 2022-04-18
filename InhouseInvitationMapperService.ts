import { InhouseInvitation } from "../../../../entities/InhouseInvitation";
import MapperService from "../../../../shared/utils/mapper/MapperService";
import { IRequestCreateInhouseInvitationDto } from "../../domain/dto/IRequestCreateInhouseInvitationDTO";

export default class InhouseInvitationMapperService extends MapperService<
  IRequestCreateInhouseInvitationDto,
  Partial<InhouseInvitation>
> {
  protected map(source: IRequestCreateInhouseInvitationDto): Partial<InhouseInvitation> {

    return {
      property: { id: source.propertyId },
      invitationStatus: source.invitation.invitationStatusId,
    };
  }
}
