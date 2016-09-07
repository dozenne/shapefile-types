// Type definitions for shapefile 0.4.0
namespace shapefile {
    interface Options {
        size: Number,
        encoding: string,
        ignoreProperties: boolean
    }

    interface Source {
        open(path: string): any,
        header(): any,
        record(): any,
        close(): void
    }
}
declare var shapefile: {
    read(path: string): any,
    read(path: string, options: shapefile.Options): any,
    source(options: shapefile.Options): shapefile.Source,
    open(path: string): any
};

export = shapefile;
