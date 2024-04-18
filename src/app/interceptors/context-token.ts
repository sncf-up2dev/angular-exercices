// Time code : 1h24

import { HttpContextToken } from "@angular/common/http";

export const IS_LOGGING_ENABLED = new HttpContextToken<boolean>(() => false)