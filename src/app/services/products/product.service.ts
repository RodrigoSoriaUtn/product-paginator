import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "https://utn2019-avanzada2-tp9.herokuapp.com/api/products?"
  
  private defaultOrderBy = "productId"
  private defaultDirection = "ASC"
  private defaultPageNumber = 1
  private defaultPageSize = 10
  
  constructor(private httpClient : HttpClient) { }

  public getAll(options : Map<String, String>) {
    
    let url = this.apiUrl
    url += "direction=" + this.defaultDirection
    url += "&orderBy=" + this.defaultOrderBy
    url += "&page=" + this.defaultPageNumber
    url += "&size=" + this.defaultPageSize

    return this.httpClient.get(url)
  }

}
