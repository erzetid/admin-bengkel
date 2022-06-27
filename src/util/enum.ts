// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export enum StatusPayment {
  PENDING = "PENDING",
  PAID = "PAID",
  UNPAID = "UNPAID",
  CANCELED = "CANCELED",
}

export enum CashType {
  INCOME = "income",
  OUTCOME = "outcome",
  NOT_SET = "not_set",
}

export enum CashCategory {
  DIRECT = "direct",
  PART = "part",
  TRANSACTION = "transaction",
}

export enum TransactionType {
  SERV = "serv",
  PART = "part",
}

export enum FavoriteType {
  SERV = "serv",
  PART = "part",
}
