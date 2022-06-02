// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

interface IVehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  plate: string;
  registrationNumber: string;
  owner: string;
}

export class Vehicle {
  private _id: string;
  private _brand = "No Brand";
  private _model = "No Model";
  private _year = 2000;
  private _plate = "No Plate";
  private _registrationNumber = "No Registration Number";
  private _owner = "No Owner";

  constructor(data: {
    id: string;
    owner?: string;
    brand?: string;
    model?: string;
    year?: number;
    registrationNumber?: string;
  }) {
    this._id = data.id;
    this._owner = data.owner || this._owner;
    this._brand = data.brand || this._brand;
    this._model = data.model || this._model;
    this._year = data.year || this._year;
    this._registrationNumber =
      data.registrationNumber || this._registrationNumber;
  }

  setId(id: string): Vehicle {
    this._id = id;
    return this;
  }

  setBrand(brand: string): Vehicle {
    this._brand = brand;
    return this;
  }

  setModel(model: string): Vehicle {
    this._model = model;
    return this;
  }

  setYear(year: number): Vehicle {
    this._year = year;
    return this;
  }

  setPlate(plate: string): Vehicle {
    this._plate = plate;
    return this;
  }

  setRegistrationNumber(registrationNumber: string): Vehicle {
    this._registrationNumber = registrationNumber;
    return this;
  }

  getId(): string {
    return this._id;
  }
  getBrand(): string {
    return this._brand;
  }
  getModel(): string {
    return this._model;
  }
  getYear(): number {
    return this._year;
  }
  getPlate(): string {
    return this._plate;
  }
  getRegistrationNumber(): string {
    return this._registrationNumber;
  }

  toJSON(): IVehicle {
    return {
      id: this._id,
      owner: this._owner,
      brand: this._brand,
      model: this._model,
      year: this._year,
      plate: this._plate,
      registrationNumber: this._registrationNumber,
    };
  }
}
