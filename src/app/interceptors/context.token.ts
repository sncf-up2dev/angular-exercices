import {HttpContextToken} from "@angular/common/http";

export const USER_IS_LOGGED = new HttpContextToken<boolean>(() => false)
