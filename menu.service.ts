import { Injectable } from '@angular/core';
import {menuData} from "../models/menuData";
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }


getMenuItems()
{
  return menuData;
}
}
