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
  private id: string;
  private brand = "No Brand";
  private model = "No Model";
  private year = 2000;
  private plate = "No Plate";
  private registrationNumber = "No Registration Number";
  private owner = "No Owner";

  constructor(data: {
    id: string;
    owner?: string;
    brand?: string;
    model?: string;
    year?: number;
    registrationNumber?: string;
  }) {
    this.id = data.id;
    this.owner = data.owner || this.owner;
    this.brand = data.brand || this.brand;
    this.model = data.model || this.model;
    this.year = data.year || this.year;
    this.registrationNumber =
      data.registrationNumber || this.registrationNumber;
  }

  setId(id: string): Vehicle {
    this.id = id;
    return this;
  }

  setBrand(brand: string): Vehicle {
    this.brand = brand;
    return this;
  }

  setModel(model: string): Vehicle {
    this.model = model;
    return this;
  }

  setYear(year: number): Vehicle {
    this.year = year;
    return this;
  }

  setPlate(plate: string): Vehicle {
    this.plate = plate;
    return this;
  }

  setRegistrationNumber(registrationNumber: string): Vehicle {
    this.registrationNumber = registrationNumber;
    return this;
  }

  getId(): string {
    return this.id;
  }
  getBrand(): string {
    return this.brand;
  }
  getModel(): string {
    return this.model;
  }
  getYear(): number {
    return this.year;
  }
  getPlate(): string {
    return this.plate;
  }
  getRegistrationNumber(): string {
    return this.registrationNumber;
  }

  toJSON(): IVehicle {
    return {
      id: this.id,
      owner: this.owner,
      brand: this.brand,
      model: this.model,
      year: this.year,
      plate: this.plate,
      registrationNumber: this.registrationNumber,
    };
  }
}
