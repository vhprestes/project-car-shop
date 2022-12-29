import {
  isValidObjectId,
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';
  
abstract class AbstractODM<T> {
  protected modelName: string;
  protected model: Model<T>;
  protected schema: Schema;
  
  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }
  
  public async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }
  
  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid Mongo id');
    return this.model.findByIdAndUpdate(id, obj as UpdateQuery<T>, { new: true });
  }
  public async findAll(): Promise<T[] | []> {
    const findAll = await this.model.find();
    return findAll;
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('Invalid Mongo id');
    const findById = await this.model.findById(id);
    return findById;
  }
}
  
export default AbstractODM;